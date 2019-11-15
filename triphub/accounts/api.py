from rest_framework import generics
from .serializers import CreateUserSerializer, UserSerializer, LoginUserSerializer
from rest_framework.response import Response


class UserRegistrationAPI(generics.GenericAPIView):
    serializer_class = CreateUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({"user": UserSerializer(user, context=self.get_serializer_context()).data})


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginUserSerializer

    def post(self, request, *args, **kwargs):
        data_content = request.data
        email = data_content['email']
        del data_content['email']
        data_content['username'] = email
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            return Response({'email': email})
        else:
            return Response({'email': email})
