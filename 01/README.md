# Temas del 19 de junio

Ejemplo de metodología BEM:

```html
<div class="bloque bloque--modificador">
    <div class="bloque__elemento"></div>
    <div class="bloque__elemento"></div>
    <div class="bloque__elemento--modificador"></div>
</div>
```

Ejemplo de cómo se utilizaría en CSS:

```scss
.bloque {
    background-color: rgba(white, 0.3);
    min-height: 200px;
    margin: 20px auto;

    max-width: 1200px;
    display: flex;

    gap: 20px;

    &--modificador {
        padding: 20px;
        background-color: blue;
    }

    &__elemento {
        border: 1px solid;
        background-color: rgba(white, 0.3);
        flex-grow: 1;

        &--modificador {
            background-color: red;
        }
    }
}
```
