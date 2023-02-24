from  rest_framework import serializers

from users.serializers import ProfileSerializer
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    #profile = ProfileSerializer(read_only=True)

    class Meta:
        model = Post
        fields = ("pk", "author", "title", "comment", "score", "likes", "written_date")
        #profile","image", "locality1", "locality2"
class PostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fiels = ("author","title", "comment", "score")
        # "image"