# my-angular2-quickstart

This is a repo that was my first attempt of Angular2. I used Angular2 QuickStart as my seed project.

This repo contains all my curiosity of Angular2 with my study notes that I found that it is interested to record.

##Notes
1. How does import work in Angular 2?
   	<br/> Relative path and absolute path for import different files, components.
	  * posts:
 		  * http://stackoverflow.com/questions/34816470/how-does-import-work-in-angular-2
 		  * http://stackoverflow.com/questions/32191057/typescript-import-using-path-from-some-root

2. Instance Angular 2 Component Two times
  	<br/> Bootstrap angular 2 compoents, different with bootstrap components and non-bootstrap components.
	Cannot use single bootstrap component twice on the same page. Non-main components can be created
	as much as you want.
	  * posts:
		  * http://stackoverflow.com/questions/34818238/instance-angular-2-component-two-times/34818494#34818494

3. How to create an empty object based on interface file in component
   <br/>
   Case produce:<br/>
   I need to create a form filled in with empty object attributes. I got **object.attribute is undefined** error. What I did before is:
   ```javascript
   	  // dj is an interface.
      public newDj : dj;
   ```
   And for the HTML, I used `ngModel` for two-way bindings:
   ```html
   	<div class="form-group">
		<label for="name">Name</label>
		<input type="text" class="form-control" required 
		   	[(ngModel)] = "newDj.name" />
	</div>
	```
	The reason for this is becasue `public newDj : dj;` just declared an object called newDj and type of newDj is dj. It didn't create an instance of dj.
	After read the [post: How can I create an object based on an interface file definition in TypeScript?](http://stackoverflow.com/questions/13142635/how-can-i-create-an-object-based-on-an-interface-file-definition-in-typescript), with this [gentle man](http://stackoverflow.com/users/3180970/user3180970)'s solution.
	I did:
	```javascript
		public newDj = <dj>{};
	```
	Boom, fixed the problem!
