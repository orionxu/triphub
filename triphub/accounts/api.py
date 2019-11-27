from rest_framework import generics
from .serializers import CreateUserSerializer, UserSerializer, LoginUserSerializer, JWTSerializer
from rest_framework.response import Response
from rest_framework.authtoken.models import Token


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

