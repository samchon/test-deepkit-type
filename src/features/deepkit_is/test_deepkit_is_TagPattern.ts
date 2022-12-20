import { is } from "@deepkit/type";

import { TagPattern } from "../../structures/TagPattern";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_TagPattern = _test_deepkit_is(
    "TagPattern",
    TagPattern.generate,
    (input) => is<TagPattern>(input),
    TagPattern.SPOILERS,
);