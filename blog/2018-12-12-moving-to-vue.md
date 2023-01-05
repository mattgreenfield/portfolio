---
title: Moving from React to Vue
path: '/blog/moving-to-vue'
date: '2018-12-12'
---

I've been working with [React](https://reactjs.org/) for the last year but have recently also started working with [Vue](https://vuejs.org/). Although they do both have thier own pros and cons, they are both Javascript libraries that let you build interfaces with 'reactive' components using a 'virtual' DOM.

What suprised me however was how differnt they are. I had assumed that differences would be mereley in syntax but here's a list of things that caught me out;

## Some are different

### Component name

In React, custom component names must be uppercase. In Vue, they don't have to be.
For me, React makes much more sense as you know that `<Button>` is our component and `<button>` is the native HTML button. This means that in Vue, you end up with a `<our-button>` component.

### Template logic

HTML is kept seperate from the data manipulation (unless you use jsx). In vue, each component has a seperate templates and JavaSript. There are some basic JS type things you can do in the HTML, such as loops and if/else statements but they require aditional HTML elements and if you want to keep your HTML free of empty, pointless spans, it's best to do the computation in the JS part of the component.

### Passing down components to other components

In React, you can pass a 'child' to any component (`<MyButton>I'm the children</MyButton>`) and use it in that component with `this.props.children`. If you want to pass multiple components you can add them as a prop `<MyButton icon="<span>icon</span>">I'm the children</MyButton>` and render them in the Button component with `this.props.icon`.
In vue, this concept is known as 'slots'. In the components template you can render the child by using a `<slot></slot>` tag. If you need multiple, named components you can use named slots `<MyButton><span slot="text">I'm the children</span><span slot="icon">Icon</span></MyButton>` and `<button><slot name="icon"></slot><slot name="text"></slot></button>`.

For me, React is much easier to use here and (again) removes the need for additional elements in our HTML.

#### Things I've not yet worked out

- A common pattern in React is to pass a function as the child of a component. I believe you can achieve similar outcomes in Vue by using the 'slot scope'
- In React if you pass mulitple elements (without a container/wrapper) as children, you can count them and filter them within the component. I'm not sure how to do this with Vue.

### Getting data from a child component in to it's parent

In React you can pass a function down as a prop and run that function (that's defined in the parent) from the child.
So `<MyButton whenClicked={ () => alert('clicked) } />` and `<button onClick={ this.props.whenClicked }>Click Me</button>`.

But in Vue you must 'emit' an event from the child component and listen for that event in the parent.
`<MyButton v-on:whenClicked="alert('clicked)" />` and `<button :onClick="$emit(whenClicked)">Click Me</button>`

## Some concepts are the same;

- props and proptypes
