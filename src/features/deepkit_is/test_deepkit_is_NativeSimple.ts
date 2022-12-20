import { is } from "@deepkit/type";

import { NativeSimple } from "../../structures/NativeSimple";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_NativeSimple = _test_deepkit_is(
    "NativeSimple",
    NativeSimple.generate,
    (input) => is<NativeSimple>(input),
    NativeSimple.SPOILERS,
);