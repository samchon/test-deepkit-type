import { is } from "@deepkit/type";

import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ConstantAtomicUnion = _test_deepkit_is(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    (input) => is<ConstantAtomicUnion>(input),
    ConstantAtomicUnion.SPOILERS,
);