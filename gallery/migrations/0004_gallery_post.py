# Generated by Django 3.0.6 on 2020-05-23 19:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gallery', '0003_gallery_entry_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='gallery',
            name='post',
            field=models.CharField(default='#', max_length=1000),
        ),
    ]
