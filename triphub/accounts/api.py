from rest_framework import generics
from .serializers import CreateUserSerializer, UserSerializer, LoginUserSerializer, JWTSerializer, getplanSerializer
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from triphub.plan.models import Attraction
import mlrose


class UserRegistrationAPI(generics.GenericAPIView):
    serializer_class = CreateUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = Token.objects.get(user=user)
        return Response({"user": UserSerializer(user, context=self.get_serializer_context()).data,
                         "token": token.key,
                         "tags": u",".join(o.name for o in user.profile.tags.all())})


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        token = Token.objects.get(user=user)
        return Response({"user": UserSerializer(user, context=self.get_serializer_context()).data,
                         "token": token.key,
                         "tags": u",".join(o.name for o in user.profile.tags.all())})


class JWTAPI(generics.GenericAPIView):
    serializer_class = JWTSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({"user": UserSerializer(user, context=self.get_serializer_context()).data,
                         "tags": u",".join(o.name for o in user.profile.tags.all())})


class PlanAPI(generics.GenericAPIView):
    serializer_class = getplanSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        places = serializer.validated_data['places']
        places_list = places.split(",")
        places_data = list()
        for place in places_list:
            att_id = int(place)
            att_obj = Attraction.objects.get(id=att_id)
            places_data.append((att_id, att_obj.geo_x, att_obj.geo_y, att_obj.name))
        dist_list = list()
        for i in range(len(places_data)-1):
            for j in range(len(places_data)-1-i):
                x_dist = abs(places_data[i][1]-places_data[i+j+1][1])
                y_dist = abs(places_data[i][2]-places_data[i+j+1][2])
                dist_list.append((i, i+j+1, x_dist+y_dist))
        fitness_dists = mlrose.TravellingSales(distances=dist_list)
        problem_fit = mlrose.TSPOpt(length=len(places_list), fitness_fn=fitness_dists,
                                    maximize=False)
        best_state, best_fitness = mlrose.genetic_alg(problem_fit, random_state=2)
        route_list = list()
        for i in range(len(best_state)):
            route_list.append(places_data[best_state[i]])
        return Response({"route": route_list})

