# Contributing to boggler

Thanks for considering contribution to boggler. You can git clone the
boggler source on the following address and send PR with your patch. But,
before doing that, I recommend you to read this to follow the conventions.

https://github.com/Bogglian/boggler

```
$ git clone https://github.com/Bogglian/boggler.git
# OR
$ git clone https://github.com/Bogglian/boggler
```

Everything is in order to provide uniform guidelines. This is for reference only, so don't worry too much dude.

## Coding style

The boggler is written in vscode. So we use the vscode extension for the coding style. follow:

- Prettier in vscode
- eslint in vscode

we use 'prettier-eslint' for default environment. also, use eslint plugin 'eslint-config-airbnb'.

https://github.com/prettier/prettier-eslint

```
$ yarn add eslint-config-airbnb
// or $ npm install eslint-config-airbnb
```

Exception follow:

```
Comming Soon!
```

## Branch Guideline

Our Branch is

If you want to add feature in version 1.0.0 for exmaple:

```
$ git branch v1.0.0-feat
$ git chckout -b v1.0.0-feat
// or git checkout -b v1.0.0-feat

...

$ git commit -m "feat: Add feature name"
// In this case you need to write a commit message

$ git push upstream(this repo) v1.0.0-feat
```

but, this is just an example. In fact, what do you write is autonomous.

## Commit Style

Our commit messages conform to the following rules:

> The title of the commit message should be written in the current form, not the past or future form.
>
> Don't use periods in the title. Only use content.
>
> When creating a commit message, avoid duplication of words as much as possible. If there are many overlap of words, the document becomes unnatural.

### Commit Style Types

| Title  | Describe                                        | Usage - commit title                    |
| ------ | ----------------------------------------------- | --------------------------------------- |
| feat   | Add a feature.                                  | feat: Add(Modify, Delete) a Feature     |
| bugfix | fix a bug .                                     | bugfix: Modify a bug                    |
| docs   | All about documentation.                        | docs: Add(Modify, Delete) a Document    |
| env    | All about the development environment settings. | env: Add(Modify, Delete a Package       |
| style  | All about styling.                              | style: Add((Modify, Delete) style title |

### Commit Contents

The contents of the commit should be as detailed as possible. For best example:

```
feat: Add feature.js

We were having some kind of issue and decided to implement some feature to solve it.

As a result, I implemented this functionality through this commit. A description of this feature follows.

1. Do something.
2. Perform some function.
3. Some input is coming in and some output is coming out.

In addition, it is efficient to substitute any role of function.
```

but, this is just an example. In fact, what do you write is autonomous.

## Issue Template

We are using [issue templates](.github/ISSUE_TEMPLATE/).

## Test Guideline

We followed this test 'Story & Scenario' guideline:

```
// Example

Story. user possibly create a this components.
  Scenario
    given: don't write setting config.
    when: create this component,
    then: create a component with default setting config.
  Scenario
    given: write setting config to width and height.
    when: create this component,
    then: create a component with width and height.
```

When you finish thinking about 'Story & Scenario', you possible write test code using the 'jest' and 'enzyme'.

> jest is 'Test Runner', enzyme is 'Test Utility for React'

```
// if basic 'non-interactive' component(this is use only jest)

describe("This Component", () => {
    describe("user possibly create a component.", () => {
        it("don't write setting config,", () => {
            const component = shallow(<This />)
            const default = { width: null, height: null}
            expect(component.state()).toEqual(default);
        });

        it("write setting config to width and height.", () => {
            const component = shallow(<This width={500} height={400}/>)
            const boxConfig = { width: 500, height: 400}
            expect(component.state()).toEqual(boxConfig);
        })
    })
})
```

```
// if you want test for 'props'

describe("This Component", () => {
    describe("user possibly get a component's props.", () => {
        it("get setting config to a width", () => {
            const component = shallow(<This width={500} />)
            expect(wrapper.prop('width')).toEqual(500);
        });

        it("get setting config to width and height.", () => {
            const component = shallow(<This width={500} height={400}/>)
            const boxConfig = { width: 500, height: 400}
            expect(wrapper.prop('width')).toEqual(500);
            expect(wrapper.prop('height')).toEqual(400);
        })
    })
})

```

after, if you can repeatedly follow this:

> Write 'Story & Scenario' -> Write test code -> Make feature -> Refactoring

This process removes duplicate code and minimizes functionality.
