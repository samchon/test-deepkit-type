import { is } from "@deepkit/type";

import { TagFormat } from "../../structures/TagFormat";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_TagFormat = _test_deepkit_is(
    "TagFormat",
    TagFormat.generate,
    (input) => is<TagFormat>(input),
    TagFormat.SPOILERS,
);