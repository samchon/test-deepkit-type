import { is } from "@deepkit/type";

import { SetAlias } from "../../structures/SetAlias";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_SetAlias = _test_deepkit_is(
    "SetAlias",
    SetAlias.generate,
    (input) => is<SetAlias>(input),
    SetAlias.SPOILERS,
);