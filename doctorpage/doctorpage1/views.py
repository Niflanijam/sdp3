from django.shortcuts import redirect, render
from .models import Doctor

def home(request):
    return render(request, 'html/index1.html')





def search_doctors(request):
    query = request.GET.get('place','')
    if query:
        doctors = Doctor.objects.filter(address__exact=query)
    else:
     return render(request, 'html/index1.html')

    return render(request, 'html/index1.html', {'doctors': doctors , 'query': query})





def doctor_list(request):
    doctors = []  # Initially return an empty list or some data
    return render(request, 'html/index1.html', {'doctors': doctors})

  
def kidney_needer(request):
    return render(request, 'html/kidneyneeder.html')
































