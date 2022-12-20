import { is } from "@deepkit/type";

import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ConstantAtomicWrapper = _test_deepkit_is(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    (input) => is<ConstantAtomicWrapper>(input),
    ConstantAtomicWrapper.SPOILERS,
);