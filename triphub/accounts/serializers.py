from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from taggit_serializer.serializers import (TagListSerializerField,
                                           TaggitSerializer)
from django.shortcuts import get_object_or_404


class NewTagListSerializerField(TagListSerializerField):
    def to_internal_value(self, value):
        if isinstance(value, str):
            value = value.split(',')

        if not isinstance(value, list):
            self.fail('not_a_list', input_type=type(value).__name__)

        for s in value:
            if not isinstance(s, str):
                self.fail('not_a_str')

            self.child.run_validation(s)
        return value


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')


class CreateUserSerializer(TaggitSerializer, serializers.ModelSerializer):
    profile_tags = NewTagListSerializerField()

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'profile_tags')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], None, validated_data['password'])
        for tag in validated_data['profile_tags']:
            user.profile.tags.add(tag)
        return user


class LoginUserSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Unable to log in with provided credentials.")


class JWTSerializer(serializers.Serializer):
    token = serializers.CharField()

    def validate(self, data):
        token = get_object_or_404(Token, key=data['token'])
        if token:
            user = User.objects.get(id=token.user_id)
            return user
        raise serializers.ValidationError("Unable to auth with provided credentials.")



