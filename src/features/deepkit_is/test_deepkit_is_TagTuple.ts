import { is } from "@deepkit/type";

import { TagTuple } from "../../structures/TagTuple";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_TagTuple = _test_deepkit_is(
    "TagTuple",
    TagTuple.generate,
    (input) => is<TagTuple>(input),
    TagTuple.SPOILERS,
);