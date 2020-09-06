import { css } from "lit-element";
export const styles = css `
  :host {
    display: block;
    font-family: var(--theme-font-family);
    width: 100%;
  }
  .container {
    display: flex;
    flex-direction: row;
    border: solid 1px var(--theme-secondary-color);
    max-width: 50%;
  }

  img {
    width: 15rem;
    margin-right: 1rem;
  }

  .profile {
    display: flex;
    flex-direction: column;
  }

  .profile ul {
    list-style: none;
  }

  .profile li {
    margin-bottom: 0.5rem;
  }

  .social-links {
    margin: 0 auto;
    padding: 0;
  }
  .social-links li {
    float: left;
  }
  .social-links img {
    height: 2rem;
    width: 2rem;
  }

  .github {
    cursor: pointer;
  }

  /* Responsive */
  .container.mobile {
    display: flex;
    flex-direction: column;
    max-width: none;
    width: 100%;
  }

  .profile h2 {
    text-align: center;
  }

  .container.mobile img.photo {
    width: 70%;
    margin: 1rem auto 0 auto;
  }
`;
export const githubIconBase64Encoded = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg==";
export const linkedIconBase64Encoded = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAI4SURBVFhH7VZNTxNRFD0bE7pQE7fGlS79BRr3hp07/A1GXYgxbuQPsIAA8zoIFgga3ZgY3Rhdm2gaw8x7BQVbtPUjtEZ0oRiE1HvuPLUxBDNlwM2c5KT3vZt73ul9nTtFjhw5/onBJz0IqwcwvLg/FVnD2h3BxOdQqtVhXBPGrqRkU2uD+LxXS4k79R4R+YSZehvXX3ZH1gZ2FeG7gldNAbbQ2JYKmbiNsJIIkoy5Z+z2ZG1gP6K0fNCrpgDvka2kCA8M578hiPpFsF9jNbHFoZ1MDDT1y6RGp4HpNyIUPfQZyL0+0r2tDu1kZgbGX7ADKxiLe5WMS7W2kvmJxeRqpl63Uey4nswMFJ0Iuh8iFsleJAZEOG7I+pmsW8K3kr+lnWFufCFjA5OvKDTvM3w8P8NElzUuRsdxze3TmDCuD5NLm2o6UwPGLvhMYiBwV/xKfhPRaWn9Kb9iPsaN6m4bsFeT2J7A7RbzXxGWk4MC+0B/pHtiIHBncfOD5ON1DJWP6J6x9/fOwGjUh9n3NLCG4eiw7gW7YsBVfIZzYFVylzQemzvjO7CGkaeHdM/Yu5j2IzwTAxNLFKrCVI4pA/tFnoJBmOeML2KmQQPfEbqTGHVHJX6MqeUMDfyZbhuePHBTuCHdkM9feVkrbbK3IwMs+v0y8gdwyJCMOfEY6+T7K6+DS9aJgS5fRmG5ICL/8XVM8M9EqdZAUTrBVqYha1hr7AWv1iUG7hW0hbySNGTNgHQxR44c2wL4CXdMCQL2Gc8oAAAAAElFTkSuQmCC";
export const twitterIconBase64Encoded = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKuSURBVFhH7VZLaxNRFA66SUAtuHGjW1F3rooLRRAxc+cmkyj4FxREwZU7u1OUbgpuAjUzk0ebl9Yu7NqVYHVtN4oQaSHzbNL0kb6O50xum1QbzCSzzAeHucy95zvfnHPvuRMaYYQR/ofxyc/hWyXnTDRrnfZj5DM+WQ0LmsEgadajWGGryjTbYJpV82e2ES+0qkw1Hgs6f7hX3A9LmukolT3guQbw/Jo/Qx+lvAcoxuXzEBG0/YNSyFTLJDIkAabb7ecxFi9sQeIdQKKyD3J2FeSMi7YKPNugeevGnDsmaPsH1RGdazzfAFl3vCBEyjSzExxFKaUdHNtfJNWcwIxNYfAWzqGZVmxmA7CMBn2MoO0fBwLipW0i+S7p9tPYzDrEi61DERQcA04JFw88bVyNZhyOPl+Vtu9wAhLvAfDrPtE73FAMRfxIzgHcnQfKQC0E4K3vhqQ2z7GMs6iUAxAQm92kujZjmn2F3l97tXQKN9gDpdxaQGEVb/FfYJrxPPkBcCOuBVMCnm/+lNLG/WQRTojpNujrj8kAU02NNmUgArw66/Yv8bovYKkWadMGIoCOIWUBT0CR684FMd0Td7LmRTlb36GjGJgAaipIuh59u3JZTPeEpNamKf3oG5wAPOcQm90AlnFVpluXrk/ASbHsCKLTy7dpnZxxghWADWaX5+rYjDZxbL/hqX9bK/aGm7hZXeoVB30iEAHxotcBl+R846Gi18+K6UMoafu8nKu/wDLtellSO50ysAy0e7uzwnTno6RarzHIM3y+xBa9wHS3QTWnO6A7+NACyKn7MqIA8eJ2+9IRRkeUZ+tHgnYbCcDnYJcRTy1H0LlzHSOZPxvyOibQzwT+VPzGU2BSKv0Y+ZAvjp8IusHAU98iiuqOUUn8GPmQr6AZYYQReiAU+gNkqkYBvl9ncgAAAABJRU5ErkJggg==";
//# sourceMappingURL=jwc-user-profile.styles.js.map