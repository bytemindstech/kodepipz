import type { CustomThemeConfig } from "@skeletonlabs/tw-plugin";

export const kodepipzTheme: CustomThemeConfig = {
  name: "kodepipz-theme",
  properties: {
    // =~= Theme Properties =~=
    "--theme-font-family-base": `system-ui`,
    "--theme-font-family-heading": `system-ui`,
    "--theme-font-color-base": "0 0 0",
    "--theme-font-color-dark": "255 255 255",
    "--theme-rounded-base": "6px",
    "--theme-rounded-container": "12px",
    "--theme-border-base": "1px",
    // =~= Theme On-X Colors =~=
    "--on-primary": "var(--color-primary-100)",
    "--on-secondary": "255 255 255",
    "--on-tertiary": "0 0 0",
    "--on-success": "var(--color-primary-900)",
    "--on-warning": "0 0 0",
    "--on-error": "255 255 255",
    "--on-surface": "255 255 255",
    // =~= Theme Colors  =~=
    // primary | #0d1ad9
    "--color-primary-50": "219 221 249", // #dbddf9
    "--color-primary-100": "207 209 247", // #cfd1f7
    "--color-primary-200": "195 198 246", // #c3c6f6
    "--color-primary-300": "158 163 240", // #9ea3f0
    "--color-primary-400": "86 95 228", // #565fe4
    "--color-primary-500": "13 26 217", // #0d1ad9
    "--color-primary-600": "12 23 195", // #0c17c3
    "--color-primary-700": "10 20 163", // #0a14a3
    "--color-primary-800": "8 16 130", // #081082
    "--color-primary-900": "6 13 106", // #060d6a
    // secondary | #ed1e07
    "--color-secondary-50": "252 221 218", // #fcddda
    "--color-secondary-100": "251 210 205", // #fbd2cd
    "--color-secondary-200": "251 199 193", // #fbc7c1
    "--color-secondary-300": "248 165 156", // #f8a59c
    "--color-secondary-400": "242 98 81", // #f26251
    "--color-secondary-500": "237 30 7", // #ed1e07
    "--color-secondary-600": "213 27 6", // #d51b06
    "--color-secondary-700": "178 23 5", // #b21705
    "--color-secondary-800": "142 18 4", // #8e1204
    "--color-secondary-900": "116 15 3", // #740f03
    // tertiary | #ade70d
    "--color-tertiary-50": "243 251 219", // #f3fbdb
    "--color-tertiary-100": "239 250 207", // #effacf
    "--color-tertiary-200": "235 249 195", // #ebf9c3
    "--color-tertiary-300": "222 245 158", // #def59e
    "--color-tertiary-400": "198 238 86", // #c6ee56
    "--color-tertiary-500": "173 231 13", // #ade70d
    "--color-tertiary-600": "156 208 12", // #9cd00c
    "--color-tertiary-700": "130 173 10", // #82ad0a
    "--color-tertiary-800": "104 139 8", // #688b08
    "--color-tertiary-900": "85 113 6", // #557106
    // success | #15cb64
    "--color-success-50": "220 247 232", // #dcf7e8
    "--color-success-100": "208 245 224", // #d0f5e0
    "--color-success-200": "197 242 216", // #c5f2d8
    "--color-success-300": "161 234 193", // #a1eac1
    "--color-success-400": "91 219 147", // #5bdb93
    "--color-success-500": "21 203 100", // #15cb64
    "--color-success-600": "19 183 90", // #13b75a
    "--color-success-700": "16 152 75", // #10984b
    "--color-success-800": "13 122 60", // #0d7a3c
    "--color-success-900": "10 99 49", // #0a6331
    // warning | #d8c70e
    "--color-warning-50": "249 247 219", // #f9f7db
    "--color-warning-100": "247 244 207", // #f7f4cf
    "--color-warning-200": "245 241 195", // #f5f1c3
    "--color-warning-300": "239 233 159", // #efe99f
    "--color-warning-400": "228 216 86", // #e4d856
    "--color-warning-500": "216 199 14", // #d8c70e
    "--color-warning-600": "194 179 13", // #c2b30d
    "--color-warning-700": "162 149 11", // #a2950b
    "--color-warning-800": "130 119 8", // #827708
    "--color-warning-900": "106 98 7", // #6a6207
    // error | #d219b0
    "--color-error-50": "248 221 243", // #f8ddf3
    "--color-error-100": "246 209 239", // #f6d1ef
    "--color-error-200": "244 198 235", // #f4c6eb
    "--color-error-300": "237 163 223", // #eda3df
    "--color-error-400": "224 94 200", // #e05ec8
    "--color-error-500": "210 25 176", // #d219b0
    "--color-error-600": "189 23 158", // #bd179e
    "--color-error-700": "158 19 132", // #9e1384
    "--color-error-800": "126 15 106", // #7e0f6a
    "--color-error-900": "103 12 86", // #670c56
    // surface | #2e4ba3
    "--color-surface-50": "224 228 241", // #e0e4f1
    "--color-surface-100": "213 219 237", // #d5dbed
    "--color-surface-200": "203 210 232", // #cbd2e8
    "--color-surface-300": "171 183 218", // #abb7da
    "--color-surface-400": "109 129 191", // #6d81bf
    "--color-surface-500": "46 75 163", // #2e4ba3
    "--color-surface-600": "41 68 147", // #294493
    "--color-surface-700": "35 56 122", // #23387a
    "--color-surface-800": "28 45 98", // #1c2d62
    "--color-surface-900": "23 37 80", // #172550
  },
};
