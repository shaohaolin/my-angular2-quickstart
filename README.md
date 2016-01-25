# my-angular2-quickstart

This is a repo that was my first attempt of Angular2. I used Angular2 QuickStart as my seed project.

This repo contains all my curiosities of Angular2 with my study notes that I found that it is interesting to record.

##Notes
###1. How does import work in Angular 2?
Relative path and absolute path for import different files, components.
* posts:
	* http://stackoverflow.com/questions/34816470/how-does-import-work-in-angular-2
 	* http://stackoverflow.com/questions/32191057/typescript-import-using-path-from-some-root

###2. Instance Angular 2 Component Two times
Bootstrap angular 2 compoents, different with bootstrap components and non-bootstrap components.
	Cannot use single bootstrap component twice on the same page. Non-main components can be created
	as much as you want.
* posts:
	* http://stackoverflow.com/questions/34818238/instance-angular-2-component-two-times/34818494#34818494

###3. How to create an empty object based on interface file in component
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
The reason for this is becasue `public newDj : dj;` just declared an object called `newDj` and type of `newDj` is dj. It didn't create an instance of `dj`.
	After read the [post: How can I create an object based on an interface file definition in TypeScript?](http://stackoverflow.com/questions/13142635/how-can-i-create-an-object-based-on-an-interface-file-definition-in-typescript), with this [gentle man](http://stackoverflow.com/users/3180970/user3180970)'s solution.
I did:
```javascript
public newDj = <dj>{};
```
Boom, fixed the problem!

###4. How to pass and access input properties in a component class?
Case produce:<br/>
I learned how to pass properties from Angular 2 tutorial. It uses square brackets for binding and declares **inputs: [...]**. I can access the input properties in the component template without errors. However, I had a **property ... is undefined.** if I try to display the property in a component class.<br/>
Parent template:
```html
<dj-form *ngIf="openNewForm" [rankvalue]="currentRank"></dj-form>
```
Child Component code:
```typescript
@Component({
	selector: 'dj-form',
	templateUrl: 'app/dj-form/dj-form.component.html',
	inputs: ['rankvalue']
})
export class DjFormComponent {
	public newDj = <dj> {};

	createDj() {
		consolo.log(rankvalue);
		consolo.log(this.rankvalue);
	}
}
```
Obviously, I don't have any access or any variable called **rankvalue**. But what does `inputs` in the component annotation do?
<br/>
I can get this value by injecting service to watch this variable. But I don't want to do that. 
Is it any other way that I can access the property in a component class? After read [this article](http://tombuyse.com/accessing-input-properties-in-a-component-class-angular-2/), I got a solution. And I favor the solution that [Tom Buyse](http://tombuyse.com/accessing-input-properties-in-a-component-class-angular-2/) showed in his blog.
I changed child component code:
```typescript
@Component({
	selector: 'dj-form',
	templateUrl: 'app/dj-form/dj-form.component.html',
})

export class DjFormComponent {
	@Input() rankvalue;

	createDj() {
		consolo.log(this.rankvalue);
	}
}
```
No more non sense `inputs` array in component. I like this solution because it clearly shows the scope of input properties and also it looks like Angular 1 for people like me did a lot angular 1 projects. `@input() rankvalue'` is similar to `$scope.rankvalue` for binding value to directive in angular 1. [Tom Buyse](http://tombuyse.com/accessing-input-properties-in-a-component-class-angular-2/) also mentioned that we are not able to access the input properites before the view is rendering.

###5. Is selector attribute necessary for Component?
Selector is not necessary. I discovered this after I implemented routing in the app. It's no harm to have one in the component anyway.

###6. How to apply different html classes based on dynamic value?
I have `ngFor` for looping through an array of objects. Each object has multiple attributes. I want to apply different materializecss grid class based on object's ranking (one of the attribute of the object). Here is what I do using `ngClass` in Angular 2.
```html
<div class="col s12" *ngFor="#dj of Djs" [ngClass]="{l6: dj.rank === 1, l3: dj.rank < 6, l2: dj.rank >= 6}">
</div>
```
Because I need to evaluate 3 different expressions, I use `ngClass` for apply different style class. I could use the syntax like `[class.l6]="dj.rank===1"`, works in Angular 2. However, the limitation is I can't do multiple evaluation at a time. I have to write a lot `[class....]="..."` to make this happen. 