from django.db import models
from django.utils.timezone import now

class Upload(models.Model):
    id = models.AutoField(primary_key=True)
    created_at = models.DateTimeField(default=now, blank=True)
    num_stimuli = models.IntegerField()

class Quad(models.Model):
    id = models.AutoField(primary_key=True)
    upload = models.ForeignKey(Upload, on_delete=models.CASCADE)
    uuid = models.UUIDField()
    word1 = models.CharField(max_length=100)
    word2 = models.CharField(max_length=100)
    word3 = models.CharField(max_length=100)
    word4 = models.CharField(max_length=100)
    word5 = models.CharField(max_length=100)
    word6 = models.CharField(max_length=100)
    created_at = models.DateTimeField(default=now, blank=True)

class Rankable(models.Model):
    quad = models.OneToOneField(Quad, on_delete=models.CASCADE, primary_key=True)
    uuid = models.UUIDField()
    rank1 = models.CharField(max_length=100)
    rank2 = models.CharField(max_length=100)
    rank3 = models.CharField(max_length=100)
    rank4 = models.CharField(max_length=100)
    rank5 = models.CharField(max_length=100)
    rank6 = models.CharField(max_length=100)
    created_at = models.DateTimeField(default=now, blank=True)

    class Meta:
        unique_together = (('quad', 'uuid'),)

class Value(models.Model):
    id = models.AutoField(primary_key=True)
    uuid = models.UUIDField()
    age = models.IntegerField()
    gender = models.CharField(max_length=50)
    native_languages = models.CharField(max_length=1000)
    convo_languages = models.CharField(max_length=1000)
    created_at = models.DateTimeField(default=now, blank=True)
