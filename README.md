# Observatorium

#Client

#User

|  HTTP Method  |    URI path  		 		  |    Description        |  Protected |
| ------------- | ----------------------------|-----------------------|------------|
|     GET	    | /  				 		  | Home page             |            |
|     GET	    | /seleccion				  | Selection             |            |
|     GET		| /lista-elementos  		  | list of elements 	  |	           |
|     GET		| /lista-elementos/:id 	      | element details		  |            | 
|     GET		| /tierra        			  | earth event   	      |     ✅     |
|     GET		| /marte/carrusel   		  | mars carousel         | 	✅     |
|     GET		| /marte/clima      		  | mars weather          |     ✅     |
|     GET	    | /perfil       			  | Profile     	      |     ✅     |
|     GET 		| /perfil/mis-elementos  	  | user created elements |     ✅     |
|     GET 		| /404                  	  | error page            |            |
|     PUT 	    | /perfil/:id/edit            | Administration panel  |     ✅     |
|     DELETE 	| /perfil/:id/delete          | Administration panel  |     ✅     |



#Admin

|  HTTP Method  |    URI path  		 			    |    Description       |  Protected  |
| ------------- | ----------------------------------|--------------------- |-------------|
|       GET		| /admin  	    				    | Admin profile	   	   |  ✅         |
|       GET		| /admin/panel 	    				| Administration panel |  ✅         |
|      DELETE 	| /user/:id/delete         	        | Administration panel |  ✅         |


#Server

|  HTTP Method  |    URI path  		 			    |    Description       |  Protected  |
| ------------- | ----------------------------------|--------------------- |-------------|
|      POST		| /auth/signup  	    		    | Admin profile	   	   |  ✅         |
|      POST		| /auth/login    	    		    | Administration panel |  ✅         |
|      POST		| /auth/logout    	    		    | Administration panel |  ✅         |
|      GET		| /items/getAllItems    	        | Administration panel |  ✅         |
|      GET		| /items/getAllItems/:id    	    | Administration panel |  ✅         |
|      POST		| /items/createItem             	| Administration panel |  ✅         |
|      PUT		| /items/:id/edit               	| Administration panel |  ✅         |
|      DELETE 	| /items/:id/delete           	    | Administration panel |  ✅         |
|      DELETE 	| /items/comment/:id/delete         | Administration panel |  ✅         |
