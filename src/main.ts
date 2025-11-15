import "./style.css";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `

<div class="*:text-xs!">

<div class="text-green-500">
<div>
helo
</div>
</div>
</div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
