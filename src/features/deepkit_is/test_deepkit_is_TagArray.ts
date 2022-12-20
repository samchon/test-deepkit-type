import { is } from "@deepkit/type";

import { TagArray } from "../../structures/TagArray";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_TagArray = _test_deepkit_is(
    "TagArray",
    TagArray.generate,
    (input) => is<TagArray>(input),
    TagArray.SPOILERS,
);