import { is } from "@deepkit/type";

import { SetUnion } from "../../structures/SetUnion";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_SetUnion = _test_deepkit_is(
    "SetUnion",
    SetUnion.generate,
    (input) => is<SetUnion>(input),
    SetUnion.SPOILERS,
);