import { is } from "@deepkit/type";

import { TagType } from "../../structures/TagType";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_TagType = _test_deepkit_is(
    "TagType",
    TagType.generate,
    (input) => is<TagType>(input),
    TagType.SPOILERS,
);