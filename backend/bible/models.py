# from django.db import models

# class BibleBook(models.Model):
#     name = models.CharField(max_length=100)
#     amharic_name = models.CharField(max_length=100) 
    
#     def __str__(self):
#         return f"{self.name} ({self.amharic_name})"

# class Chapter(models.Model):
#     book = models.ForeignKey(BibleBook, on_delete=models.CASCADE, related_name='chapters')
#     chapter_number = models.IntegerField()
#     # start_page = models.IntegerField()
#     end_page = models.IntegerField()
#     content = models.TextField()  
    
#     class Meta:
#         ordering = ['chapter_number']
    
#     def __str__(self):
#         return f"{self.book.amharic_name} ምዕራፍ {self.chapter_number}"