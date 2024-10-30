# from django.shortcuts import render
# from docx import Document
# import openpyxl
# import os

# def load_excel_data():
#     excel_path = 'C:\\Users\\asus\\Desktop\\hiyaw-kal\\backend\\bible\\data\\Hiyaw_Kal_Project.xlsx'
#     workbook = openpyxl.load_workbook(excel_path)
#     sheet = workbook.active
#     bible_data = {}
    
#     # Assume columns: A - Book Name, B - Chapter, C - Start Page, D - End Page
#     for row in sheet.iter_rows(min_row=2, values_only=True):
#         book_name, chapter, start_page, end_page = row
#         bible_data[(book_name, chapter)] = (start_page, end_page)
    
#     return bible_data

# def get_bible_content(book_name, chapter):
#     # Load excel data for start and end page information
#     bible_data = load_excel_data()
#     if (book_name, chapter) not in bible_data:
#         return "Content not available for this selection."

#     start_page, end_page = bible_data[(book_name, chapter)]

#     # Load the content from the .docx file based on the start and end page
#     docx_path = 'C:\\Users\\asus\\Desktop\\hiyaw-kal\\backend\\bible\\data\\bible hiyaw kal ordered.docx'
#     document = Document(docx_path)
#     content = ""
    
#     for i, paragraph in enumerate(document.paragraphs):
#         if start_page <= i <= end_page:
#             content += paragraph.text + "\n"
    
#     return content

# def bible_content_view(request):
#     if request.method == 'POST':
#         book_name = request.POST.get('book_name')
#         chapter = request.POST.get('chapter')

#         content = get_bible_content(book_name, int(chapter))
#         return render(request, 'bible_content.html', {'content': content, 'book_name': book_name, 'chapter': chapter})
    
#     return render(request, 'bible_content.html')
