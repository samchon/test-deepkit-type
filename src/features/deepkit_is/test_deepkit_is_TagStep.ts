import { is } from "@deepkit/type";

import { TagStep } from "../../structures/TagStep";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_TagStep = _test_deepkit_is(
    "TagStep",
    TagStep.generate,
    (input) => is<TagStep>(input),
    TagStep.SPOILERS,
);