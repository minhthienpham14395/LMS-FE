# Release Checklist

## Build Gate

- [ ] `npm ci`
- [x] `npm run lint`
- [x] `npm run test:run`
- [x] `npm run build`

## Functional Smoke

- [ ] Public: home -> courses -> course detail
- [ ] Auth: login validation -> login success -> logout
- [ ] Student: dashboard -> my courses -> learning -> quiz -> next lesson
- [ ] Profile: edit profile -> save -> success toast
- [ ] Deep route refresh returns `index.html`
- [ ] API loading, empty, error and retry states render correctly

## Responsive QA

- [ ] Width matrix: 320, 344, 360, 375, 390, 412, 430, 540, 768, 820, 882, 912, 1024, 1280, 1440
- [ ] Low heights: 568, 667, 720
- [ ] Portrait and landscape critical flows
- [ ] Desktop browser zoom 200% for auth, courses, learning and profile
- [ ] Long text data: course title, user name and error message
- [ ] No horizontal scrollbar

## Accessibility

- [ ] One primary `h1` per page
- [ ] Navigation landmarks have clear labels where multiple navs exist
- [ ] Form controls have real labels
- [ ] Form errors are announced and connected with `aria-describedby`
- [ ] Icon-only buttons have `aria-label`
- [ ] Decorative images use `alt=""`
- [ ] Keyboard order follows visual order
- [ ] Focus visible is clear
- [x] Reduced motion is respected globally

## SPA Deployment

Configure the production server to fallback all client routes to `index.html`.

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```
