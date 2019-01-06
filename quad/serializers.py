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

class StimuliFileSerializer(serializers.Serializer):
    csv = serializers.CharField(min_length=1)
    stimuli = serializers.IntegerField(min_value=1)

class QuadResponseSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    rank1 = serializers.CharField(min_length=1, max_length=100)
    rank6 = serializers.CharField(min_length=1, max_length=100)
    word1 = serializers.CharField(min_length=1, max_length=100)
    word2 = serializers.CharField(min_length=1, max_length=100)
    word3 = serializers.CharField(min_length=1, max_length=100)
    word4 = serializers.CharField(min_length=1, max_length=100)
    word5 = serializers.CharField(min_length=1, max_length=100)
    word6 = serializers.CharField(min_length=1, max_length=100)
    responded = serializers.BooleanField(required=False)

class SurveyResponseSerializer(serializers.Serializer):
    uuid = serializers.UUIDField()
    gender = serializers.ChoiceField(['Male', 'Female', 'Other'])
    age = serializers.IntegerField(min_value=13, max_value=100)
    nativeLanguages = serializers.ListField(child=serializers.CharField())
    convoLanguages = serializers.ListField(child=serializers.CharField())
    responses = QuadResponseSerializer(many=True)
