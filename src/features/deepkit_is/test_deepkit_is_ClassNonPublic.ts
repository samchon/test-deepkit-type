import { is } from "@deepkit/type";

import { ClassNonPublic } from "../../structures/ClassNonPublic";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ClassNonPublic = _test_deepkit_is(
    "ClassNonPublic",
    ClassNonPublic.generate,
    (input) => is<ClassNonPublic>(input),
    ClassNonPublic.SPOILERS,
);