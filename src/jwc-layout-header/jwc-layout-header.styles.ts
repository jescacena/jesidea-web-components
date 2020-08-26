import { css } from "lit-element";

export const styles = css`

    :host {
    //  position: relative;
    }
    .container {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    img {
        width: 130px;
        height: 25px;
    }


    .menu-desktop {
        list-style: none;
        margin ; 0;
        padding: 0;
        font-family: var(--theme-font-family);
        color: var(--theme-font-color, #000);

    }
    .menu-desktop li {
        float:left;
        margin-right: 1rem;
    }
    .menu-mobile-icon img {
        width: 32px;
    }


    .menu-mobile {
        position:absolute;
        width: 20%;
        transition: right 0.3s;
        font-family: var(--theme-font-family);
        color: var(--theme-font-color, #000);
        top: 0rem;
        right: -30rem;
        z-index:1111;
        background-color: var(--theme-bg-color-third);
        padding: 1rem;
    }

    .menu-mobile.visible {
        right: 0;
        display: block
    }

    .menu-mobile .close {
        font-weight: bold;
        text-align:right;
        margin-bottom: 2rem;
    }

    .menu-mobile ul {
        list-style: none;
        margin ; 0;
        padding: 0;
    }

    .menu-mobile li {
        margin-bottom: 1rem;
    }

`;


export const fallbackImageBase64Encoded = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAAAZCAMAAAAlvm1xAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURUdwTJM8MI48LZI6MJE6L5I6MJY8LZI6MJE8L5E6MJE8L5E6MJE8MpI8MJI6L5hHPezi3ZVCN+XZ1LR5cJM/NMqinP/z8+vm4e7q5P/w6ZtNQ6diWaReU9zIxbyIgdS1sK5uZt/CveTPyplJQNzEvr2KhMOVjt/Iw+XPy5pKP5dEOqNbUapoX+LLxqdjWd3IwfDw8O7m5sqkntvCv+3t7di5s59USciknplJPvHj46JaT6ZfVsick5ZCN////59TSdm7t7F0bOHOyqpoX5pLQallXNu6tqBVS93AubJ0ae7i3dq/vc2ln+vc2di9uZ1QRuTRye/l4p5SSdvCwtOyq6VcU61sZMKSitq5s7V6cbl+dfDb28OWj5Q8MpM+NOjg2OPTzJ1QRqFXTbR2bqNbUZtLQerj3KpoX5pJPr6Oh7R7c86knOXU0M+vqMegmNvJxuzd2a1wZeLc3OLJwfHx5Mael6lnX6NeVsealL2Mg7BxaLqCfJhGOpE8MvHx8cWflv///6djWe/n59Ctp6NcUv/r65tORLJ7cqVeVqdjWc6tppM9M7ByaryIgKNZT76JgpdHPZtOQ6ZhWKdlW5ZEO6RgVb2KhZpMQti/urmCfJdFPLqEfJZFOqBTSdi+uKlnXpZGPNGyq6RgVti8tqBYT8+rpNe6tcuimqZjWcGTjKRdVahnXdSrpN/IxMWWkNGqo+ra1bmFfJ5RSKRaUaprYcmhm7yJg8mZktK1sK1tZMifl8igmZhGPdrCu6ZdVaxtYt3Bu+TSzb+Ph6lkWqdlXKpqYLFxadi8tdi8tuvX19W0r8aYlKhkXK54cJ9US8yhmObZ1ZdFPNzDvNKxq7V8c7d+da9waMebk8WblOTRzZtORK9vZ6lnX5I7MJM9Mo4zKJE3LY0yJpE5Lo82Ko80KZA3LJM8MY81Ko4zKZI6L5M8Mo0xJZA2K44yJ5M+M4wvJJM9M5E6L481KYwuI40wJZI8MJM7MI83K40zJ4krH5A4LIstIpI9MocoHYcnG4UkGPiQTz4AAADddFJOUwBVIpm73RGId+5mqjNEzPMr9zmx/oIGEBkL7c/dRqJiwzc171OekkMx8fnSyjTdSxEff1UWUud87BvX1ob6AuI+ukjN5cxV3k2+LT5sMlvnISjjJEnQwIdCragZkPz8Ljfq2rja7iXA8JqjaDxngUg2vyw+E4zU2omRvK7z/BOGBdUgdMYN4LDgyG74tp/Sj+3kx9Pt0aTiXZ71qPflV8XrQ9cu4XE0d9KR2s9lQY1kMaLe2MeAfn1otnZs7kzXs1M5gNDEu7hJYyddetd/43A+8klVi7bDgI1D57nLxB441AAABOlJREFUSMfNV2V01FgUjs6byWSmRkvdoaW0sLhvkcV9cSjFoci6K+sO6+7u7u7ubuclk4z7dFqgLWvxpDOdDT/YczY/mjm537vv3vvd+71XBPn/POfNvfq6m6+55KIzTjrcnmkAnBA/BGDFjZCNBGG7l4Mn1B32BG3QYYoZdynr38f4YNDHMPu4c4ZnwlkBICC0A4BmQgAJgQNAGT5SkDQN4YIJcR/j7oINDe2BpC/Bd+7OjCWhzcQbmbajHVrNQjji+nCM75o+b3JT08qnp7i9iaC7NhPWAc2oTUdYbBAzi+GmeMLfVjH/tbeXDX715fm1zdGYp7R/BiwOzahNR1ghYRbCLUmfq+aZBW+EWa6L5XLGLJ7OxsK3Fx1qoc0RTlMqCko9If+CV1gv2/DWxn5JvmNTdnNkv7uqTzAKIfh3dwIiZUcM2iwmMcyI+AJ569e6eraXrax6N4/1dQyY2uqZMLUQQfKHImndZUaFgMBSqbCbUbEqGnLP2hNmW3I3wpy8rc+ysCe3/K+nyu9HkLIhJwuAkccYu8uECgFhIN8iTjEJUbMYxnv5DdVbPF+t2xBmvfHN6x7wBipzcyoeF7vylHIEGTYk3zDoWqFRQQnsuEXZCRC4mrROBUYQFIIDfZiBCKR0+QRA+CO6OCoYafyYZ3d8H66ZPYjvGPgguz/45MR5jxwp2IouG1pw6hg9XkIrtF3ck5ZyxkiHOA1Wpf808in5k6bTqJOWuJLJtFtlh05EjmHb0nbPDzu7f5xTl5N8vnoS5FYUPTpNQg4fe/lZxu6SlyAWJyH3n8iMk5ScUQpCJR8oUak6bZXfTgmIkapRes90Rd5f3xpd9V1XqHXuh2xW9Z0uz3JkWqlYB6TKHxtm7C41WzlZaegwo3AKCFQNgVAki1SqAnTZpm2qUXZ0t58f9Olmz7ff/NTtrvuAzapvdnkfG1d8xxrROJm7qtfoy1QAyR9G2Cg5dZAuDhS0YYiOFXpV2k2QK4tYBc0oV+3WaCj5Tkvc37jr688+WRuZWX9bkB997yTuQtE48M8reqmwFD4tHUrasQQgpNJ0mlQDIyEtj6xTXCJ1oECcZpSrNsobClQu3uJxL1z9USx4sOUufyhSspR3nT0CQUZcWVNoOBOVzfAU7SXUnHWdFjihFclyKn3iMMqYalSqdvFoL8PmZx8dZzku0DGl8L4Iw64e5Q65/phdGeue2MeRSaYooYVUWhXR5INUw1SOTMrYNIRuVFk8Pc5A/sXsFXuz2koeHjmAZULcjCcCIQYG/J3nn9uHTttSRcehdKIuH0q/a0emVY0yxUirR/dpbAKGX3hz0ZIli2Y1RplE9AvkJZYRHm5htlozixi1MvraUuFlVcac6qXTFrX0Km26XtNGox7Y8VmeGOM/ULxs8Fi3m0l42nJr3+MYeCBeMkebB1qklFJZl39guMooLkVn0GkblMJFCTFlq0VYrJAEHOlG6TmuOCzc5HhvT7uPgZ2//frLts8PBvqNP7a/5tEu7gw0/gklBGFExPwwG5qi00AqCIXaBZJQVFcoK51q1O58J57Jcz1BCPkk15q3a/vfm+q/fP2hgl53McpwO7LghDBmVjkZZeKAeHsWZ1bmCYjfaVGMlLsnJc2mTBWeapSfsj17r73hnueW/9y0dcfvO9ekHIYC0U7qv/u/4h+qRvoKHIWnRAAAAABJRU5ErkJggg==";

export const hamburgerIconBase64Encoded = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACKSURBVFhH7dY9DkBAFATg17gMzoMWZ6P1cyYO4ATMSChk63mKN8nX2GI2Npu3Fon8IRUccIqxs4HkopItnw9KK1gG/BUdtCLsYie7IxH/FDDADJMIu0YowTZI3VGFHfw3kIPHEbCTxx+J+OcZxz1wTCqw6x3HfBSk7qjC/SBJLSi5PkpriEQ8Y3YBGdA68Zu0vE8AAAAASUVORK5CYII=";