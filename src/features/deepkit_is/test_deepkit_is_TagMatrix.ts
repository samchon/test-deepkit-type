import { is } from "@deepkit/type";

import { TagMatrix } from "../../structures/TagMatrix";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_TagMatrix = _test_deepkit_is(
    "TagMatrix",
    TagMatrix.generate,
    (input) => is<TagMatrix>(input),
    TagMatrix.SPOILERS,
);