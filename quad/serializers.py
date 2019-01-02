from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.validators import UniqueValidator

class LoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField(min_length=2, max_length=150)
    password = serializers.CharField(min_length=8, max_length=200, write_only=True)

    class Meta:
        model = User
        fields = ['username', 'password']


    def validate_username(self, username):
        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            raise serializers.ValidationError('Username not found')

        if not user.is_active:
            raise serializers.ValidationError('Please confirm your email first.')

        return username

    def validate(self, validated_data):
        user = authenticate(**validated_data)

        if user is None:
            raise serializers.ValidationError({'password': 'Unable to log in with provided credentials.'})

        return user