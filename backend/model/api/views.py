from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .utils import get_response, predict_class
from django.contrib.auth.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import UserSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        'GET /api',
    ]

    return Response(routes)

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['username'] = user.username
        token['email'] = user.email

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['POST'])
def registerUser(request):
    serializer = UserSerializer(data=request.data)
    if request.method == 'POST':
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User registered'}, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response({"error": "Invalid request method"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)


@api_view(['POST'])
def handleUserPrompt(request):
    message = request.data.get('message')

    
    if not message:
        return Response({'error': 'Message not provided'}, status=status.HTTP_400_BAD_REQUEST)

    intents_list = predict_class(message)
    response = get_response(intents_list)

    return Response({'response': response}, status=status.HTTP_200_OK)

@api_view(['GET'])
def getUserInfo(request):
    user = request.user
    if user.is_authenticated:
        serializer = UserSerializer(user, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)
    else:
        return Response({"detail": "Authentication credentials were not provided."}, status=status.HTTP_401_UNAUTHORIZED)
