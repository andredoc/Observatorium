# Observatorium

#User

|  HTTP Method  |    URI path  		 			      |    Description        |  Protected |
| ------------- | ----------------------------|-----------------------|------------|
|     GET			  | /  				 			            | Home page             |            |
|     GET			  | /seleccion				 			    | Selection             |            |
|     GET			  | /lista-elementos  		 		  | list of elements 	    |	           |
|     GET			  | /lista-elementos/:id 	 			| element details		    |            | 
|     GET			  | /tierra        			        | earth event   	      |     ✅     |
|     GET			  | /marte/carrusel   			    | mars carousel         | 	  ✅     |
|     GET		    | /marte/clima      			    | mars weather        	|     ✅     |
|     GET			  | /perfil       				      | Profile     	       	|     ✅     |
|     GET 		  | /perfil/mis-elementos  		  | user created elements	|     ✅     |
|     GET 		  | /404                  		  | error page          	|            |


#Admin

|  HTTP Method  |    URI path  		 			            |    Description       |  Protected  |
| ------------- | ----------------------------------|--------------------- |-------------|
|       GET			| /admin  	    				            | Admin profile	   	   |  ✅         |
|       GET			| /admin/panel 	    				        | Administration panel |  ✅         |
