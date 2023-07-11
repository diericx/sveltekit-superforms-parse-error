# Superforms parse error reproduction

```
npm i
npm run dev
```

Submit form and open console to see `SyntaxError`

It is worth noting that in this case, at least in development, the browser is printing the 413
error request which is useful. When I encountered this in production it was not.

The logic I was hitting can be found here:

https://github.com/sveltejs/kit/blob/23d1df702f0fd77983040404352d8d83fd1dd8a1/packages/kit/src/exports/node/index.js#L27
