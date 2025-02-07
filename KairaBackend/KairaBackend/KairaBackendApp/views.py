from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import User
from .serializers import UserSerializer
from django.contrib.auth.hashers import make_password

@api_view(['POST'])
def signup(request):
    data = request.data
    data['password'] = make_password(data['password'])  # Hash the password
    serializer = UserSerializer(data=data)

    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Signup successful!", "user": serializer.data}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
