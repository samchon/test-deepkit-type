import { is } from "@deepkit/type";

import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ToJsonAtomicSimple = _test_deepkit_is(
    "ToJsonAtomicSimple",
    ToJsonAtomicSimple.generate,
    (input) => is<ToJsonAtomicSimple>(input),
);