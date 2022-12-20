import { is } from "@deepkit/type";

import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ToJsonAtomicUnion = _test_deepkit_is(
    "ToJsonAtomicUnion",
    ToJsonAtomicUnion.generate,
    (input) => is<ToJsonAtomicUnion>(input),
);