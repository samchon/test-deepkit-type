import { is } from "@deepkit/type";

import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_TagObjectUnion = _test_deepkit_is(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) => is<TagObjectUnion>(input),
    TagObjectUnion.SPOILERS,
);