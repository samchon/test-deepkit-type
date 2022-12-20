import { is } from "@deepkit/type";

import { TagLength } from "../../structures/TagLength";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_TagLength = _test_deepkit_is(
    "TagLength",
    TagLength.generate,
    (input) => is<TagLength>(input),
    TagLength.SPOILERS,
);