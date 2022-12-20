import { is } from "@deepkit/type";

import { NativeUnion } from "../../structures/NativeUnion";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_NativeUnion = _test_deepkit_is(
    "NativeUnion",
    NativeUnion.generate,
    (input) => is<NativeUnion>(input),
    NativeUnion.SPOILERS,
);