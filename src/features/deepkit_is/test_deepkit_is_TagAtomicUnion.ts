import { is } from "@deepkit/type";

import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_TagAtomicUnion = _test_deepkit_is(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => is<TagAtomicUnion>(input),
    TagAtomicUnion.SPOILERS,
);