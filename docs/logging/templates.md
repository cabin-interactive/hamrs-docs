---
sidebar_position: 1
---

# Templates

Every logbook uses a template, which sets the fields on the log form and in the toolbar above it. You choose the template when you create the logbook, and you can change it later with **Edit** in the logbook's menu.

| Template | Log form | Toolbar | Adds to the ADIF export |
| --- | --- | --- | --- |
| **Generic** | Their Call, RST sent and received, comments, notes | My Call, My Grid, My State, My County | |
| **POTA** | Adds **Their Park** | Adds **My Park** and POTA spots | `MY_SIG`, `MY_SIG_INFO`, `MY_POTA_REF` for your park. `SIG`, `SIG_INFO`, `POTA_REF` for theirs. |
| **SOTA** | Adds **Their Summit** | Adds **My Summit** and SOTA spots | `MY_SOTA_REF`, `SOTA_REF` |
| **Field Day** and **Winter FD** | **Their Class** and **Their Section** in place of the signal reports | Adds **My Class** and **My Section** | `CLASS`, `ARRL_SECT`, `APP_HAMRS_MY_CLASS`, `MY_ARRL_SECT` |
| **Custom** | A template you build yourself in **Config** | | |

Every template also has time, frequency, mode, and power in the toolbar. **Custom** can't be selected until you have created a custom template.

Toolbar values such as My Park and My Grid carry over from one QSO to the next until you change them.

On a POTA logbook:

- Entering **My Park** fills in My Grid, and My State when the park is in a single state.
- **Their Park** accepts several parks separated by commas. HAMRS saves one QSO per park.
