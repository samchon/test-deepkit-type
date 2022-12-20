import { is } from "@deepkit/type";

import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_TupleRestArray = _test_deepkit_is(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => is<TupleRestArray>(input),
    TupleRestArray.SPOILERS,
);