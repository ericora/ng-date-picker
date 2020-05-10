# DatePicker

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

This is a simple date picker component that can be used to select date object.

[Demo](https://codesandbox.io/s/sharp-tu-3w5ir?fontsize=14&hidenavigation=1&theme=dark)
# Dependency
Users have to add [fontawsome](https://fontawesome.com/) into project to make sure the icons showd properly.
> Add fontawesome script tag into index.html head.

    <script
        src="https://kit.fontawesome.com/c5f1a64c8a.js" crossorigin="anonymous">
    </script>

# Instructions
## Step 1:
#### Install the package as dependency
    npm i @ericora/date-picker --save

## Step 2:
#### Add Package into the module you want to use it
    import {DatePickerModule} from '@ericora/date-picker';
    @NgModule({
      ...
     imports: [DatePickerModule]
     ...
    })

## Step 3:
### Add the component to your page
    <div><date-picker (dateChange)="urFunction($event)" [selectedDate]="dateObj" [minDate]="dateObj" [maxDate]="dateObj"></date-picker><div>
> Notice: the component size will depends on its parent size, so you need create a customized tag to nest it. All Input is optional. Default [selectDay] is the current date.

#### The package is the very first time try to publish my personal reused component publicly. I hope it will help you and your app. Thank you.