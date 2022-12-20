import { is } from "@deepkit/type";

import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ConstantAtomicSimple = _test_deepkit_is(
    "ConstantAtomicSimple",
    ConstantAtomicSimple.generate,
    (input) => is<ConstantAtomicSimple>(input),
    ConstantAtomicSimple.SPOILERS,
);