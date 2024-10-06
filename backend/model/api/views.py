from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .utils import get_response, predict_class

@api_view(['POST'])
def handleUserPrompt(request):
    message = request.data.get('message')

    
    if not message:
        return Response({'error': 'Message not provided'}, status=status.HTTP_400_BAD_REQUEST)

    intents_list = predict_class(message)
    response = get_response(intents_list)

    return Response({'response': response}, status=status.HTTP_200_OK)