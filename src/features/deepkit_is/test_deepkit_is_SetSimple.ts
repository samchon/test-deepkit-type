import { is } from "@deepkit/type";

import { SetSimple } from "../../structures/SetSimple";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_SetSimple = _test_deepkit_is(
    "SetSimple",
    SetSimple.generate,
    (input) => is<SetSimple>(input),
    SetSimple.SPOILERS,
);