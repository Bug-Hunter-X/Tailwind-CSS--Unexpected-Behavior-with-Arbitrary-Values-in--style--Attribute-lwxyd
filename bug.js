```javascript
// Example using Tailwind's arbitrary value feature
<div style="width: calc(100vw - 50px);">
</div>
```
This may cause unexpected behavior.  Tailwind's utility classes are designed to work harmoniously with its internal system; directly injecting arbitrary values can lead to conflicts or unpredictable styles.