# Platform
Django backend server for hosting paint-your-blues website.
## Instructions
1. Details App:
  To display all the details of this competition like about, legal, judges etc
 * Route-Available: details/about : About page
 * Template Folder has all templated required. 
   * about.html: about-page
   * base.html: Common element in all files
 * Static Folder:
   * Contains all static files in it like images, css , js
   * Accessed via {% static 'app-name&lt;eg:details&gt;/&lt;folders&gt;/file' %}
2. Gallery App
  To display contents like random gallery of entrie and also leaderboard
 * Route-Available: /: main entry page
 * Template Folder has all templated required.
   * entry.html - entry page to show random entries in grid
 * Static files could be saved in this directory too and can be accessed via 
 {% static 'app-name<eg:galley>/<folders>/file' %}
 
## Getting started
1. Create a virtual env if you want to isolate the app python packages.
2. Run ```pip install -r /path/to/requirements.txt```
3. Run python manage.py runserver
4. Open given http://127.0.0.1:8000/ 

## Contributors :sparkles:
<table>
<tr>
                <td align="center">
                    <a href="https://github.com/akhilmhdh">
                        <img src="https://avatars1.githubusercontent.com/u/31166322?v=4" width="100;" alt="akhilmhdh"/>
                        <br />
                        <sub><b>Akhil Mohan</b></sub>
                    </a>
                </td></tr>
</table>

