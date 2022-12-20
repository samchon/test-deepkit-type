import { is } from "@deepkit/type";

import { TagRange } from "../../structures/TagRange";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_TagRange = _test_deepkit_is(
    "TagRange",
    TagRange.generate,
    (input) => is<TagRange>(input),
    TagRange.SPOILERS,
);